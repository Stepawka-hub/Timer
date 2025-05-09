import { Record } from "@components/record";
import { getRecordsSelector } from '@slices/stop-watch';
import { useSelector } from '@store';
import { FC, memo } from "react";
import s from "./records-list.module.css";

export const RecordsList: FC = memo(() => {
  const records = useSelector(getRecordsSelector);

  if (!records.length) {
    return <div className={s.emptyList}>* Нажмите "Записать" для сохранения времени</div>
  }

  const recordElements = records.map((record, index) => (
    <Record key={index} {...record} />
  ));

  return (
    <section>
      <div className={s.list}>{recordElements}</div>
    </section>
  );
});
