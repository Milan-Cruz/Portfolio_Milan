import React from 'react';
import styled from 'styled-components';

const StyledTableFooter = styled.tfoot`
  background-color: #f5f5f5;
  text-align: left;
`;

export type TableFooterProps = {
  children: React.ReactNode;
};

const TableFooter: React.FC<TableFooterProps> = ({ children }) => {
  return <StyledTableFooter>{children}</StyledTableFooter>;
};

export default TableFooter;
