import React from 'react';

import PostHeader from '../PostHeader';
import PostFooter from '../PostFooter';
import { Container, Content } from './styles';

const Post = () => (
  <Container>
    <PostHeader />
    <Content>
      Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate.
      Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque,
      lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere,
      rutrum eu ipsum. Aliquam eget odio sed ligula iaculis consequat at eget orci. Mauris molestie
      sit amet metus mattis varius. Donec sit amet ligula eget nisi sodales egestas. Aliquam
      interdum dolor aliquet dolor sollicitudin fermentum. Donec congue lorem a molestie bibendum.
      Etiam nisi ante, consectetur eget placerat a, tempus a neque. Donec ut elit urna. Etiam
      venenatis eleifend urna eget scelerisque. Aliquam in nunc quis dui sollicitudin ornare ac
      vitae lectus.
    </Content>
    <PostFooter />
  </Container>
);

export default Post;
