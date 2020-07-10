import useFetch from "fetch-suspense";
import React, { useState, Suspense } from "react";
import {
  Window,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableHeadCell,
  TableDataCell,
  WindowHeader,
  WindowContent,
  Tabs,
  Tab,
  Hourglass,
} from "react95";
import { getScore } from "./utils.js";

const F1Component = () => {
  const [activeTab, handleChange] = useState(0);
  const data = useFetch("https://api.npoint.io/4b91d0a0fa91bc56a7a2");

  return (
    <Window>
      <WindowHeader>Formule 1</WindowHeader>
      <WindowContent>
        <Tabs value={activeTab} onChange={(value) => handleChange(value)}>
          <Tab value={0}>Saison 1</Tab>
          <Tab value={1}>Saison 2</Tab>
        </Tabs>
        <Table>
          <TableHead>
            <TableRow head>
              {data.header.map((value, index) => {
                return <TableHeadCell key={index}>{value}</TableHeadCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.stats.map((value, index) => {
              return (
                <TableRow key={index}>
                  {value.map((val, index) => {
                    return <TableDataCell key={index}>{val}</TableDataCell>;
                  })}
                  <TableDataCell key={`${index} + sum`}>
                    {getScore(value)}
                  </TableDataCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </WindowContent>
    </Window>
  );
};

export default () => (
  <Suspense fallback={<Hourglass size={128} />}>
    <F1Component />
  </Suspense>
);
