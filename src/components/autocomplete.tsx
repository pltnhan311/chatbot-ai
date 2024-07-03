import { useEffect, useState } from 'react'
import { Combobox, TextInput, useCombobox } from '@mantine/core'

export function BasicAutocomplete() {
  const [models, setModels] = useState()
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://qna-server.netlify.app/.netlify/functions/app/categories')
      const json = await res.json()
      setModels(json.data)
      console.log(json.data)
    }

    fetchData()
  }, [])

  const modelName = models?.map((item: any) => item.desc)
  console.log(modelName)

  const combobox = useCombobox()
  const [value, setValue] = useState('')
  const shouldFilterOptions = !modelName.some((item) => item === value)
  const filteredOptions = shouldFilterOptions
    ? modelName.filter((item) => item.toLowerCase().includes(value.toLowerCase().trim()))
    : modelName

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ))

  return (
    <Combobox
      onOptionSubmit={(optionValue) => {
        setValue(optionValue)
        combobox.closeDropdown()
      }}
      store={combobox}
      withinPortal={false}
    >
      <Combobox.Target>
        <TextInput
          label='Pick value or type anything'
          placeholder='Pick value or type anything'
          value={value}
          onChange={(event) => {
            setValue(event.currentTarget.value)
            combobox.openDropdown()
            combobox.updateSelectedOptionIndex()
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => combobox.closeDropdown()}
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options.length === 0 ? <Combobox.Empty>Nothing found</Combobox.Empty> : options}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  )
}
