import React, { useState } from "react";
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
} from "react95";

import data from "./data.json";

export default () => {
  const [activeTab, handleChange] = useState(0);

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
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </WindowContent>
    </Window>
  );
};
