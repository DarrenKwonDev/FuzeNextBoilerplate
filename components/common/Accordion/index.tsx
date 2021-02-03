import Link from 'next/link';
import React, { useEffect } from 'react';
import StyledAccordion, { AccordionLecture } from './style';

type AccordionType = HTMLCollectionOf<any>

function Accordion({ accordianOpenAll, setaccordianOpenAll, courseInfomation }) {
  // next라서 document is not found 에러를 피하기 위함
  useEffect(() => {
    const accordions: AccordionType = document.getElementsByClassName('accordion');
    for (let i = 0; i < accordions.length; i++) {
      // 각 아코디언 헤더에 onClick 이벤트를 달아줌
      accordions[i].onclick = function () {
        this.classList.toggle('is-open'); // is-open class 붙여주고

        const content = this.nextElementSibling; // 다음 dom 요소 즉, accordion-content
        if (content.style.maxHeight) {
          // accordion is currently open, so close it
          content.style.maxHeight = null;
        } else {
          // accordion is currently closed, so open it
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      };
    }
  }, []);

  useEffect(() => {
    if (accordianOpenAll) {
      const accordions: AccordionType = document.getElementsByClassName('accordion');
      for (let i = 0; i < accordions.length; i++) {
        accordions[i].classList.add('is-open');
        const content = accordions[i].nextElementSibling;
        content.style.maxHeight = content.scrollHeight + 'px';
        setaccordianOpenAll(true);
      }
    } else {
      const accordions: AccordionType = document.getElementsByClassName('accordion');
      for (let i = 0; i < accordions.length; i++) {
        accordions[i].classList.remove('is-open');
        const content = accordions[i].nextElementSibling;
        content.style.maxHeight = null;
        setaccordianOpenAll(false);
      }
    }
  }, [accordianOpenAll]);

  // /course/1/lecture 로 이동. lectureId를 url에서 직접 뿌릴까, 뿌리지 말까 고민
  return (
    <StyledAccordion>
      {courseInfomation.sections.map((section) => (
        <>
          <button className="accordion">{section.sectionTitle}</button>
          <div className="accordion-content">
            {section.sectionLectures.map((lecture) => (
              <Link href={`/course/${courseInfomation.id}/lecture/${lecture.id}`}>
                <AccordionLecture>
                  <span>
                    {lecture.lectureTitle}
                    {lecture.preview && <span className="preview">preview</span>}
                  </span>
                  <span>{lecture.duration}</span>
                </AccordionLecture>
              </Link>
            ))}
          </div>
        </>
      ))}
    </StyledAccordion>
  );
}

export default Accordion;
