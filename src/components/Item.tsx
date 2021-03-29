import {AiFillStar} from 'react-icons/ai';
import './Item.scss';

export default function Item({item}: {item: any}) {
  return (
    <div className='item'>
      <div className="title">
        <img src={item.owner.avatar_url} className="logo" />
        <a href={item.html_url} className="name" >{item.full_name}</a>
        <div className="star"><AiFillStar className="star-logo" />{item.stargazers_count}</div>
      </div>
      <div>{item.description}</div>
    </div>
  );
}