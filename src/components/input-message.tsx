import { TextInput, TextInputProps, ActionIcon, useMantineTheme, rem } from '@mantine/core'
import { IconArrowRight } from '@tabler/icons-react'

export function InputMessage(props: TextInputProps) {
  const theme = useMantineTheme()

  return (
    <TextInput
      radius='sm'
      size='md'
      placeholder='Enter message...'
      rightSectionWidth={42}
      rightSection={
        <ActionIcon size={32} radius='sm' color={theme.black} variant='filled'>
          <IconArrowRight style={{ width: rem(18), height: rem(18) }} stroke={2} />
        </ActionIcon>
      }
      {...props}
    />
  )
}
