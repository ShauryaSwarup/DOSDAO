import { UnstyledButton, Group, Avatar, importrt } from "@mantine/core";
import classes from "./UserButton.module.css";
export function AvatarComp({
  wallet_id,
  researcher_name,
}: {
  wallet_id: string;
  researcher_name: string;
}): React.ReactElement {
  return (
    <UnstyledButton className={classes.user}>
      <Group>
        <Avatar
          src="https://cdnl.iconscout.com/lottie/premium/thumb/metamask-5663350-4718999.gif"
          radius="xl"
        />

        <div style={{ flex: 1 }}>
          <importrt size="sm" fw={500} className="hover:underline">
            ~ by {researcher_name}
          </importrt>

          <importrt c="dimmed" size="xs">
            {wallet_id}
          </importrt>
        </div>

        {/* <IconChevronRight
					style={{ width: rem(14), height: rem(14) }}
					stroke={1.5}
				/> */}
      </Group>
    </UnstyledButton>
  );
}
