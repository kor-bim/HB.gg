'use client'

import { SearchIcon } from '@nextui-org/shared-icons'
import { Autocomplete, AutocompleteItem } from '@nextui-org/autocomplete'

export const Search = () => {
  return (
    <Autocomplete
      size="lg"
      type="text"
      startContent={<SearchIcon fontSize={24} />}
      className="max-w-[calc(0.25rem*146)] font-extrabold"
      placeholder="리그 오브 레전드 검색"
      showScrollIndicators={false}
      listboxProps={{ emptyContent: '검색된 결과가 없습니다' }}
    >
      {[]}
    </Autocomplete>
  )
}
