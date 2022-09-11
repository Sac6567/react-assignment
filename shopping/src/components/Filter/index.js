import React, { useRef } from 'react';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import Category from './FilterOprtions/Category';

import useOnClickOutside from '../../hooks/useOnClickOutside';

import { Wrapper, Icon, FilterSideBar, SideBarHeader } from './Styles';
import CheckBox from './FilterOprtions/CheckBox';

export default function Filters({ isFilterToggle, setFilterToggle }) {
  const $sideBarRef = useRef();

  // # handle the onclick outside
  useOnClickOutside($sideBarRef, () => setFilterToggle(false));

  return (
    <>
      <Wrapper
        onClick={() => {
          setFilterToggle(true);
        }}
      >
        <Icon icon={faFilter} />
      </Wrapper>

      <FilterSideBar
        ref={$sideBarRef}
        className={isFilterToggle ? 'expand' : 'shrink'}
      >
        <SideBarHeader>Filter</SideBarHeader>
        <Category />
        <CheckBox />
      </FilterSideBar>
    </>
  );
}
