import styled from 'styled-components'

import FilterByType from './filter-type'
import FilterPriority from './filter-priority'

const FilterBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default function FilterBar() {
  return (
    <FilterBarContainer>
      <FilterByType />
      <FilterPriority />
    </FilterBarContainer>
  )
}
