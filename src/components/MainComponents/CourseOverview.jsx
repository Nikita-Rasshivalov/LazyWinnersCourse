import React from "react";
import {
  COURSE_TXT_P1,
  COURSE_TXT_P2,
  COURSE_TXT_P3,
  COURSE_TXT_P4,
  COURSE_TXT_P5,
  COURSE_TXT_P6,
  COURSE_TXT_P7,
} from "../../assets/data/Constants";

export const CourseOverview = () => {
  return (
    <span className="main__text main__text-course">
      <p>{COURSE_TXT_P1}</p>
      <p>{COURSE_TXT_P2}</p>
      <p>{COURSE_TXT_P3}</p>
      <p>{COURSE_TXT_P4}</p>
      <p>{COURSE_TXT_P5}</p>
      <p>{COURSE_TXT_P6}</p>
      <p>{COURSE_TXT_P7}</p>
    </span>
  );
};
