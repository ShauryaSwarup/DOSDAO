"use client";
import useEthersSigner from "@/hooks/useEthersSigner";
import { useAccount } from "wagmi";
// import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import { setUser } from "@/redux/slice/pushSlice";
import { initUser } from "@/functions/initUser";
import "./styles.css";
import { GroupDTO, GroupInfoDTO, IFeeds, PushAPI } from "@pushprotocol/restapi";
import { GetServerSidePropsContext } from "next";

const fetchChats = async (user: PushAPI) => {
  const chats = await user.chat.list("CHATS");
  console.log("Chats", chats);
  return chats;
};

const profileInfo = async (user: PushAPI) => {
  const response = await user.profile.info();
  console.log("profile", response);
  return response;
};

const fetchChatHistory = async (chatId: any, user: PushAPI) => {
  const history = await user.chat.history(chatId);
  console.log("History", history);
  return history;
};

const sendMessage = async (chatId: string, content: any, user: PushAPI) => {
  console.log("Sending text");
  const txt = await user.chat.send(chatId, {
    type: "Text",
    content: content,
  });
  console.log("Sent message:", txt);
  return txt;
};

const joinGroup = async (user: PushAPI, chatId: any) => {
  const joinGroup = await user.chat.group.join(chatId);
  return joinGroup;
};

//CHANNEL NOTIFICATIONS
const fetchNotifications = async (user: PushAPI) => {
  // userAlice.notification.list(type, {options?})
  const inboxNotifications = await user.notification.list("INBOX");
  console.log("fetch notifs", inboxNotifications);
  return inboxNotifications;
};

const sendNotification = async (user: PushAPI) => {
  const sendNotifRes = await user.channel.send(["*"], {
    notification: { title: "test", body: "test" },
  });
  console.log("sent", sendNotifRes);
  return sendNotifRes;
};

const fetchSubs = async (user: PushAPI) => {
  // userAlice.notification.subscriptions({options?})
  const subChannels = await user.notification.subscriptions();

  return subChannels;
};

const GroupChat = (context: any) => {
  const { chatid } = context.params as { chatid: string };

  const account = useAccount();
  // const dispatch = useDispatch();

  const [chat, setChat] = useState<GroupInfoDTO | GroupDTO>();
  const [history, setHistory] = useState<any[]>([]);
  const [user, setUser] = useState<PushAPI>();
  const [chatList, setChatList] = useState<IFeeds[]>();

  const signer = useEthersSigner({ chainId: account.chainId });
  // const user = useSelector((state) => state.push.user);

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        console.log(chatid);
        if (!signer || !account) return;

        if (!user) {
          const newUser = await initUser(signer);
          if (newUser) {
            // dispatch(setUser(newUser));
            setUser(newUser);
          }
        }

        if (!chat && user) {
          const groupInfo = await user.chat.group.info(chatid);
          if (isMounted && groupInfo) {
            setChat(groupInfo);
          }

          const fetchChatHistoryData = async () => {
            try {
              const chatHistory = await fetchChatHistory(chatid, user);
              setHistory(chatHistory);
            } catch (error) {
              console.error("Error fetching chat history:", error);
            }
          };

          fetchChatHistoryData();
          const fetchNotifications = async () => {
            try {
              // Assuming user.notification.list returns an array of notifications
              const inboxNotifications = await user.notification.list("INBOX");
              setNotifications(inboxNotifications);
            } catch (error) {
              console.error("Error fetching notifications:", error);
            }
          };

          fetchNotifications();
          console.log("notif", notifications);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [account, signer, chatid, user, chat]); // Added 'chat' to dependencies

  // Rest of the component code remains the same

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const sendMessageText = async () => {
    if (!user) return;

    const res = await sendMessage(chatid, message, user);

    const updatedHistory = await user.chat.history(chatid);
    setHistory(updatedHistory);

    setMessage("");
  };

  const handleJoinGroup = async () => {
    if (!user) return;
    console.log(chatid);
    const res = await joinGroup(user, chatid);
    console.log("Joined group:", res);
  };

  const handleFetchHistory = async () => {
    if (!user) return;

    const res = await fetchChatHistory(chatid, user);
    setHistory(res);
  };

  const handleFetchChats = async () => {
    if (!user) return;

    const res = await fetchChats(user);
    setChatList(res);
  };

  const handleFetchNotif = async () => {
    if (!user) return;

    const res = await fetchNotifications(user);
    setNotifications(res);
  };
  const [message, setMessage] = useState("");

  return (
    <div className="">
      <div className="border border-white border-l-4">
        {chat && <ChatHeader chat={chat} />}
        <div className=" bg-gray-200 shadow-2xl">
          <button className="btn btn-info m-2" onClick={handleFetchChats}>
            Fetch Chats
          </button>
          {chatid && (
            <button className="btn btn-info m-2" onClick={handleJoinGroup}>
              Join Group
            </button>
          )}
          {/* <button className="btn btn-info m-2" onClick={handleFetchHistory}>
						Fetch History
					</button> */}
        </div>
        <div className="">
          <div className="chat-history-container bg-gray-100">
            {history.length > 0 && (
              <ChatHistory user={user} messages={history} />
            )}
          </div>
          <div className="flex items-center border bg-white p-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={handleMessageChange}
              className="flex-grow outline-none px-2 py-1"
            />
            <button
              onClick={sendMessageText}
              className="ml-2 bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChatHeader = ({ chat }: { chat: GroupInfoDTO | GroupDTO }) => {
  return (
    <div className="bg-blue-200 p-4 flex justify-between items-center shadow-xl border-blue-500">
      <div className="text-black text-lg font-semibold">{chat.groupName}</div>
    </div>
  );
};

const ChatHistory = ({
  user,
  messages,
}: {
  user: PushAPI | undefined;
  messages: any[];
}) => {
  console.log("for chat", user);
  const reversedMessages = [...messages].reverse();
  if (!user) return null;
  return (
    <div className="">
      {reversedMessages.map((message, index) => {
        const normalizedUserID = message.fromCAIP10.startsWith("eip155:")
          ? message.fromCAIP10.slice(9)
          : message.fromCAIP10;
        const normalizedCID = user.account.startsWith("0x")
          ? user.account.slice(2)
          : user.account;
        const date = new Date(message.timestamp);
        const month = date.toLocaleString("default", {
          month: "short",
        });
        const day = date.getDate();
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const formattedTime = `${hours}:${minutes}, ${month} ${day} `;

        // console.log(formattedTime);
        return (
          <div className="flex flex-col gap-2 m-4">
            <div className="flex flex-col gap-1 w-full">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                {normalizedUserID !== normalizedCID ? (
                  <span className="text-sm font-semilight">
                    {normalizedUserID}
                  </span>
                ) : (
                  <div></div>
                )}
              </div>
              <div className="flex">
                {normalizedUserID !== normalizedCID ? (
                  <div className="flex flex-col shadow-2xl leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-br-2xl rounded-bl-2xl rounded-tr-2xl dark:bg-gray-700">
                    <p className="text-sm font-normal text-gray-900 dark:text-white">
                      {message.messageObj.content}
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col shadow-2xl leading-1.5 p-4 border-gray-200 bg-blue-100 rounded-bl-2xl rounded-tl-2xl rounded-br-2xl dark:bg-gray-700 ml-auto">
                    <p className="text-sm font-normal text-gray-900 dark:text-white">
                      {message.messageObj.content}
                    </p>
                  </div>
                )}
              </div>
              <div className="flex">
                {normalizedUserID !== normalizedCID ? (
                  <span className="text-xs font-normal text-gray-500 dark:text-gray-400">
                    at {formattedTime}
                  </span>
                ) : (
                  <span className="text-xs font-normal text-gray-500 dark:text-gray-400 ml-auto">
                    at {formattedTime}
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const NotificationComponent = ({ notification }: { notification: any }) => {
  return (
    <div className="alert bg-white text-black">
      <span>{notification.title}</span>
      <span>{notification.message}</span>
    </div>
  );
};

export default GroupChat;
