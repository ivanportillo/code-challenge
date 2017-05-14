import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './Grid.css';

const Column = ({ children, gutter, columnWidth }) => {
  const ColumnStyle = {
    width: `${columnWidth}%`,
    marginRight: gutter / 2,
    marginLeft: gutter / 2,
  };
  return (
    <div style={ColumnStyle}>
      {children}
    </div>
  );
};

const Grid = ({ children, columns, gutter, spaceBetween }) => {
  const rows = _.chunk(children, columns);
  const rowStyle = {
    marginBottom: spaceBetween,
  };
  return (
    <div className="Grid">
      {rows.map(chunk =>
        <div key={chunk[0].key} style={rowStyle} className="Row">
          {chunk.map(child =>
            <Column key={child.key} gutter={gutter} columnWidth={100 / columns}>
              {child}
            </Column>,
          )}
        </div>,
      )}
    </div>
  );
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  columns: PropTypes.number.isRequired,
  gutter: PropTypes.number.isRequired,
  spaceBetween: PropTypes.number.isRequired,
};

export default Grid;
