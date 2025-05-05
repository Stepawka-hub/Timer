import { FC, memo } from "react";
import { RecordsListProps } from "./type";
import { Record } from "@components/record";
import s from "./records-list.module.css";

export const RecordsList: FC<RecordsListProps> = memo(({ records }) => {
  const recordElements = records.map((record, index) => (
    <Record key={index} {...record} />
  ));

  return (
    <section>
      <h2 className={s.title}>Записи</h2>
      <div className={s.list}>{recordElements}</div>
    </section>
  );
});
