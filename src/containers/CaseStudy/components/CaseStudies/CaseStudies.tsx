import { useEffect, useState } from 'react';

import { caseStudies } from '../../../../model/caseStudies';
import { Item } from './components/Item';
import { parSortTags, titleSortTags } from './data';
import paginationArrow from '../../../../assets/icons/CaseStudies/paginationArrow.svg';
import disabledPaginationArrow from '../../../../assets/icons/CaseStudies/disabledPaginationArrow.svg';

import style from './CaseStudies.module.scss';

const ITEMS_PER_PAGE = 6;

interface CaseStudiesItem {
  title: string;
  image: string;
  paragraphs: string[];
  tags: string[];
  type?: string;
}

export const CaseStudies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [titleFilterKeyword, setTitleFilterKeyword] = useState('');
  const [typeFilterKeyword, setTypeFilterKeyword] = useState('');
  const [filteredCases, setFilteredCases] = useState<CaseStudiesItem[]>(caseStudies);
  const [currentItems, setCurrentItems] = useState<CaseStudiesItem[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  const handleTitleFilter = (value: string) => {
    setTitleFilterKeyword(value.toLowerCase());
  };

  const handleTypeFilter = (value: string) => {
    setTypeFilterKeyword(value.toLowerCase());
  };

  const handleClickNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleClickPrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    let filteredData = caseStudies;

    if (titleFilterKeyword !== 'all') {
      filteredData = filteredData.filter(item => item.title.toLowerCase().includes(titleFilterKeyword));
    }

    if (typeFilterKeyword !== 'all') {
      filteredData = filteredData.filter(item => item.type?.toLowerCase().includes(typeFilterKeyword));
    }

    setFilteredCases(filteredData);
  }, [titleFilterKeyword, typeFilterKeyword]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    const slicedData = filteredCases.slice(startIndex, endIndex);
    setCurrentItems(slicedData);
    setTotalPages(Math.ceil(filteredCases.length / ITEMS_PER_PAGE));
  }, [currentPage, filteredCases]);

  return (
    <div className={style.case_studies_container}>
      <div className={style.filter_section}>
        <div className={style.filter_by_paragraph_container}>
          {parSortTags.map(string => (
            <div
              key={string}
              className={`${typeFilterKeyword === string.toLowerCase() ? style.active : style.sortButton}`}
              onClick={() => handleTypeFilter(string.toLowerCase())}
            >
              {string}
            </div>
          ))}
        </div>
        <div className={style.filter_by_title_container}>
          {titleSortTags.map(string => (
            <div
              key={string}
              className={`${titleFilterKeyword === string.toLowerCase() ? style.active : style.sortButton}`}
              onClick={() => handleTitleFilter(string.toLowerCase())}
            >
              {string}
            </div>
          ))}
        </div>
      </div>
      <div className={style.cases_count}>{filteredCases.length} Cases</div>
      {currentItems.map((item, index) => (
        <Item
          key={index}
          index={(currentPage - 1) * ITEMS_PER_PAGE + index}
          orderReverse={index % 2 === 1}
          image={item.image}
          paragraphs={item.paragraphs}
          tags={item.tags}
          title={item.title}
        />
      ))}
      <div className={style.pagination_controls}>
        <div className={style.prev_button_container}>
          <button className={style.buttonPrev} onClick={handleClickPrev} disabled={currentPage === 1} />
          {currentPage === 1 ? (
            <img className={style.disabled_arrow} src={disabledPaginationArrow} alt='prevArrow' />
          ) : (
            <img className={style.enabled_arrow} src={paginationArrow} alt='prevArrow' />
          )}
        </div>
        <div className={style.page_number}>
          {currentPage} / {totalPages}
        </div>
        <div className={style.next_button_container}>
          <button className={style.buttonNext} onClick={handleClickNext} disabled={currentPage === totalPages} />
          {currentPage === totalPages ? (
            <img className={style.disabled_arrow} src={disabledPaginationArrow} alt='nextArrow' />
          ) : (
            <img className={style.enabled_arrow} src={paginationArrow} alt='nextArrow' />
          )}
        </div>
      </div>
    </div>
  );
};
