import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
  scrollable: {
    minHeight: props => props.minHeight || 400,
    maxHeight: props => props.maxHeight || 500,
    height: props => props.height || 'auto',
    overflowX: 'hidden',
    overflowY: 'auto',
  },
});

/* tạo thanh cuộn, cho phép truyền min/max height */
export default function Scrollable(props) {
  const { children, minHeight, maxHeight, height, ...otherProps } = props;
  const classes = useStyles({ minHeight, maxHeight, height });

  return (
    <div className={classes.scrollable} {...otherProps}>
      {children}
    </div>
  );
}
Scrollable.propTypes = {
  children: PropTypes.any,
  minHeight: PropTypes.any,
  maxHeight: PropTypes.any,
  height: PropTypes.any,
};
