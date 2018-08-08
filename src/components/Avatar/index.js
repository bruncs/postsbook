import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Image } from './styles';

const Avatar = (props) => {
  const { format, size, image } = props;
  const buffer = Buffer.from(image.data);
  const image64 = buffer.toString('utf8');
  return (
    <Fragment>
      <Image alt="" format={format} size={size} src={`data:image/jpeg;base64,${image64}`} />
    </Fragment>
  );
};

Avatar.propTypes = {
  format: PropTypes.string,
  size: PropTypes.string,
  image: PropTypes.shape(),
};

Avatar.defaultProps = {
  format: 'circular',
  size: '',
  image: {
    type: 'Buffer',
    data: [],
    createdAt: '',
  },
};

export default Avatar;
