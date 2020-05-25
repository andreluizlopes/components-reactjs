import React from 'react'

import './multicolbox.scss'

const MultiColBox = () => {
  return (
    <div className='multiColBox'>
      <h3 className='multiColBox__title'>Multi-column layout</h3>
      <div className='multiColBox__content'>
        <p>Donec eu faucibus purus, at maximus erat. Cras velit felis, cursus nec massa in, blandit consectetur mauris. Duis eget magna tellus. Proin urna libero, sollicitudin vel dictum non, lobortis ac turpis. Pellentesque vitae elit porttitor, cursus libero a, ultricies leo. Sed iaculis bibendum lacus. Nam molestie mattis nunc vitae posuere. Donec in eros sagittis eros malesuada facilisis.</p>

        <aside>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor posuere sem sed ultricies. Integer eget imperdiet ipsum, sit amet aliquet urna. Etiam ultricies scelerisque molestie. Nunc efficitur leo id nisl efficitur blandit. Proin condimentum lorem ac leo rutrum pulvinar. Sed ligula nisi, scelerisque a libero eget, sagittis tempor eros. Ut quis finibus neque. Cras molestie diam mi, eget consequat lorem gravida sit amet.</p>

          <p> Ut non turpis pulvinar, vulputate est consectetur, ornare nulla. Praesent eu sagittis nunc, ac dignissim urna. Sed at turpis vel massa laoreet vestibulum eu quis justo. Nam non elementum est, dignissim rutrum dui. Maecenas at lorem nibh. In a elit quis eros fermentum egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

          <p>Donec eu faucibus purus, at maximus erat. Cras velit felis, cursus nec massa in, blandit consectetur mauris. Duis eget magna tellus. Proin urna libero, sollicitudin vel dictum non, lobortis ac turpis. Pellentesque vitae elit porttitor, cursus libero a, ultricies leo. Sed iaculis bibendum lacus. Nam molestie mattis nunc vitae posuere. Donec in eros sagittis eros malesuada facilisis. Suspendisse eu dictum orci. Proin dapibus eget augue nec laoreet.</p>
        </aside>
      </div>
    </div>
  )
}

export default MultiColBox
