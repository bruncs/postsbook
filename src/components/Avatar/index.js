import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Image } from './styles';

const Avatar = (props) => {
  const {
    border, format, size, image,
  } = props;
  const buffer = Buffer.from(image.data);
  const image64 = buffer.toString('utf8');
  return (
    <Fragment>
      <Image
        border={border}
        alt=""
        format={format}
        size={size}
        src={`data:image/jpeg;base64,${image64}`}
      />
    </Fragment>
  );
};

Avatar.propTypes = {
  border: PropTypes.string,
  format: PropTypes.string,
  size: PropTypes.string,
  image: PropTypes.shape(),
};

Avatar.defaultProps = {
  border: '1px solid rgba(0, 0, 0, 0.1)',
  format: 'circular',
  size: '',
  image: {
    type: 'Buffer',
    data: [],
    createdAt: '',
  },
};

export default Avatar;
