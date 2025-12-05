'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { caseStudies } from '../../../../model/caseStudies';
import { Item } from './components/Item';
import { keySortTags, sortTags } from './data';

import style from './CaseStudies.module.scss';

const ITEMS_PER_PAGE = 6;

export interface CaseStudiesItem {
  title: string;
  image: string;
  paragraphs: string[];
  tags: string[];
  type?: string;
  keyTags: string[];
}

interface CaseStudiesState {
  currentPage: number;
  firstFilterKeyword: string;
  secondFilterKeyword: string;
  filteredCases: CaseStudiesItem[];
  currentItems: CaseStudiesItem[];
  totalPages: number;
}

export const CaseStudies = () => {
  const searchParams = useSearchParams();
  const firstFilterParam = searchParams.get('firstFilter') || 'all';
  const secondFilterParam = searchParams.get('secondFilter') || 'all';

  const initialState: CaseStudiesState = {
    currentPage: 1,
    firstFilterKeyword: firstFilterParam.toLowerCase(),
    secondFilterKeyword: secondFilterParam.toLowerCase(),
    filteredCases: caseStudies,
    currentItems: [],
    totalPages: 1,
  };

  const [state, setState] = useState<CaseStudiesState>(initialState);

  const handleSecondFilter = (value: string) => {
    setState(prevState => ({
      ...prevState,
      secondFilterKeyword: value.toLowerCase(),
      currentPage: 1,
    }));
  };

  const handleFirstFilter = (value: string) => {
    setState(prevState => ({
      ...prevState,
      firstFilterKeyword: value.toLowerCase(),
      currentPage: 1,
    }));
  };

  const handleClickNext = () => {
    if (state.currentPage < state.totalPages) {
      setState(prevState => ({
        ...prevState,
        currentPage: prevState.currentPage + 1,
      }));
    }
  };

  const handleClickPrev = () => {
    if (state.currentPage > 1) {
      setState(prevState => ({
        ...prevState,
        currentPage: prevState.currentPage - 1,
      }));
    }
  };

  useEffect(() => {
    let filteredData = caseStudies;

    if (state.firstFilterKeyword !== 'all') {
      filteredData = filteredData.filter(
        item =>
          item.keyTags.map(t => t.toLowerCase()).includes(state.firstFilterKeyword) ||
          item.tags.map(t => t.toLowerCase()).includes(state.firstFilterKeyword)
      );
    }

    if (state.secondFilterKeyword !== 'all') {
      filteredData = filteredData.filter(
        item =>
          item.keyTags.map(t => t.toLowerCase()).includes(state.secondFilterKeyword) ||
          item.tags.map(t => t.toLowerCase()).includes(state.secondFilterKeyword)
      );
    }

    setState(prevState => ({
      ...prevState,
      filteredCases: filteredData,
      totalPages: Math.ceil(filteredData.length / ITEMS_PER_PAGE),
      currentPage: 1,
    }));
  }, [state.firstFilterKeyword, state.secondFilterKeyword]);

  useEffect(() => {
    const startIndex = (state.currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    const slicedData = state.filteredCases.slice(startIndex, endIndex);
    setState(prevState => ({
      ...prevState,
      currentItems: slicedData,
    }));
  }, [state.currentPage, state.filteredCases]);

  return (
    <div className={style.case_studies_container}>
      <div className={style.filter_section}>
        <div className={style.filter_by_paragraph_container}>
          {keySortTags.map(tag => (
            <div
              key={tag}
              className={`${state.firstFilterKeyword === tag.toLowerCase() ? style.active : style.sortButton}`}
              onClick={() => handleFirstFilter(tag)}
            >
              {tag}
            </div>
          ))}
        </div>
        <div className={style.filter_by_title_container}>
          {sortTags.map(tag => (
            <div
              key={tag}
              className={`${state.secondFilterKeyword === tag.toLowerCase() ? style.active : style.sortButton}`}
              onClick={() => handleSecondFilter(tag)}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

      <div className={style.cases_count}>{state.filteredCases.length} Cases</div>

      {state.currentItems.map((item, index) => (
        <Item
          key={index}
          index={(state.currentPage - 1) * ITEMS_PER_PAGE + index}
          orderReverse={index % 2 === 1}
          image={item.image}
          paragraphs={item.paragraphs}
          tags={[...item.keyTags, ...item.tags]}
          title={item.title}
          indexOnPage={index}
        />
      ))}

      <div className={style.pagination_controls}>
        <div className={style.prev_button_container}>
          <button className={style.buttonPrev} onClick={handleClickPrev} disabled={state.currentPage === 1} />
          {state.currentPage === 1 ? (
            <img
              className={style.disabled_arrow}
              src={'icons/CaseStudies/disabledPaginationArrow.svg'}
              alt='prevArrow'
            />
          ) : (
            <img className={style.enabled_arrow} src={'icons/CaseStudies/paginationArrow.svg'} alt='prevArrow' />
          )}
        </div>

        <div className={style.page_number}>
          {state.totalPages === 0 ? 0 : state.currentPage} / {state.totalPages}
        </div>

        <div className={style.next_button_container}>
          <button
            className={style.buttonNext}
            onClick={handleClickNext}
            disabled={state.currentPage === state.totalPages}
          />
          {state.currentPage === state.totalPages ? (
            <img
              className={style.disabled_arrow}
              src={'icons/CaseStudies/disabledPaginationArrow.svg'}
              alt='nextArrow'
            />
          ) : (
            <img className={style.enabled_arrow} src={'icons/CaseStudies/paginationArrow.svg'} alt='nextArrow' />
          )}
        </div>
      </div>
    </div>
  );
};
