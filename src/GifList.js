import React from 'react';
import { Popup, Icon } from 'semantic-ui-react';


export default class GifList extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    const gifs = this.props.gifs.map(gif => <img src={gif.images.fixed_height.url}/>)

    return (
      <div className = 'col-md-1'>
        <Popup
          trigger={<Icon name='heart' color='red' size='large' circular />}
          content={gifs[0]}
          postition='bottom right'
          />
        <Popup
          trigger={<Icon name='heart' color='yellow' size='large' circular />}
          content={gifs[1]}
          postition='bottom center'
          />
        <Popup
          trigger={<Icon name='heart' color='red' size='large' circular />}
          content={gifs[2]}
          postition='bottom left'
          />
        <Popup
          trigger={<Icon name='heart' color='yellow' size='large' circular />}
          content={gifs[3]}
          postition='bottom right'
          />
        <Popup
            trigger={<Icon name='heart' color='red' size='large' circular />}
            content={gifs[4]}
            postition='bottom right'
            />
      </div>
    )
  }
}
