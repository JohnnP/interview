import Item from './Item';

export default function ResultList({list= []}: {list: any}): JSX.Element {
  return (
    <>
      {list.map((item: any) => {
        return (
          <Item key={item.id} item={item} />
        );
      })}
    </>
  );
}