import {AiFillStar} from 'react-icons/ai';
import './Item.scss';

export default function Item({item}: {item: any}) {
  return (
    <div className='item'>
      <a href={item.html_url} className="name" >{item.full_name}</a>
      <div className="star"><AiFillStar/>{item.stargazers_count}</div>
      <div>{item.description}</div>
    </div>
  );
}