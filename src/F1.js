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
import styled from "styled-components";
import { getScore, getArrayOfScores, getConstructorScore } from "./utils.js";

const StyledTableDataCell = styled(TableDataCell)`
  text-align: ${({ index }) => (index > 1 ? "center" : "left")};
  vertical-align: middle;
`;

const StyledWindow = styled(Window)`
  max-width: 100%;
  margin-bottom: 15px;
`;

const StyledWindowContent = styled(WindowContent)`
  & > div {
    max-width: 100%;
    overflow-x: scroll;

    &:before {
      display: none;
    }
  }
`;

const F1Component = () => {
  const [activeTab, handleChange] = useState(0);
  const data = useFetch("https://api.npoint.io/4b91d0a0fa91bc56a7a2");
  const scores = getArrayOfScores(data.stats);

  return (
    <StyledWindow>
      <WindowHeader>Formule 1</WindowHeader>
      <StyledWindowContent>
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
            {data.stats.map((value, indexRow) => {
              return (
                <TableRow key={indexRow}>
                  {value.map((val, indexCell) => {
                    return (
                      <StyledTableDataCell index={indexCell} key={indexCell}>
                        {val}
                      </StyledTableDataCell>
                    );
                  })}
                  <StyledTableDataCell key={`${indexRow} + sum`}>
                    {getScore(value)}
                  </StyledTableDataCell>
                  <StyledTableDataCell key={`${indexRow} + total`}>
                    {indexRow % 2 === 0
                      ? getConstructorScore(scores)[
                          indexRow === 0 ? indexRow : indexRow - 1
                        ]
                      : ""}
                  </StyledTableDataCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </StyledWindowContent>
    </StyledWindow>
  );
};

const Formula1Animation = styled.div`
  font-size: 2.5em;
`;

export default () => (
  <Suspense fallback={<Hourglass size={128} />}>
    <F1Component />
    <Formula1Animation>🏎️</Formula1Animation>
  </Suspense>
);
