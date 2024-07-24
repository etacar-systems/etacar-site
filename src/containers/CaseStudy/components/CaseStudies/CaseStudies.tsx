import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { caseStudies } from '../../../../model/caseStudies';
import { Item } from './components/Item';
import { parSortTags, titleSortTags } from './data';
import paginationArrow from '../../../../assets/icons/CaseStudies/paginationArrow.svg';
import disabledPaginationArrow from '../../../../assets/icons/CaseStudies/disabledPaginationArrow.svg';

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

export const CaseStudies = () => {
  const location = useLocation();
  const from = location.state;
  const [currentPage, setCurrentPage] = useState(1);
  const [firstFilterKeyword, setFirstFilterKeyword] = useState(from ? from[0].toLowerCase() : 'all');
  const [secondFilterKeyword, setSecondFilterKeyword] = useState(from ? from[1].toLowerCase() : 'all');
  const [filteredCases, setFilteredCases] = useState<CaseStudiesItem[]>(caseStudies);
  const [currentItems, setCurrentItems] = useState<CaseStudiesItem[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  const handleSecondFilter = (value: string) => {
    setSecondFilterKeyword(value.toLowerCase());
    setCurrentPage(1);
  };

  const handleFirstFilter = (value: string) => {
    setFirstFilterKeyword(value.toLowerCase());
    setCurrentPage(1);
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

    if (secondFilterKeyword !== 'all') {
      filteredData = filteredData.filter(
        item =>
          item.keyTags.toString().toLowerCase().includes(secondFilterKeyword) ||
          item.tags.toString().toLowerCase().includes(secondFilterKeyword)
      );
    }

    if (firstFilterKeyword !== 'all') {
      filteredData = filteredData.filter(
        item =>
          item.keyTags.toString().toLowerCase().includes(firstFilterKeyword) ||
          item.tags.toString().toLowerCase().includes(secondFilterKeyword)
      );
    }

    setFilteredCases(filteredData);
  }, [secondFilterKeyword, firstFilterKeyword]);

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
              className={`${firstFilterKeyword === string.toLowerCase() ? style.active : style.sortButton}`}
              onClick={() => handleFirstFilter(string.toLowerCase())}
            >
              {string}
            </div>
          ))}
        </div>
        <div className={style.filter_by_title_container}>
          {titleSortTags.map(string => (
            <div
              key={string}
              className={`${secondFilterKeyword === string.toLowerCase() ? style.active : style.sortButton}`}
              onClick={() => handleSecondFilter(string.toLowerCase())}
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
          tags={[...item.keyTags, ...item.tags]}
          title={item.title}
          indexOnPage={index}
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
          {totalPages === 0 ? 0 : currentPage} / {totalPages}
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
