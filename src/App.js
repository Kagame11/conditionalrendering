
 function Item ({name, isPacked}) {
   let itemContent = name;
   if (isPacked) {
    itemContent = name + "✔";
   }
    return (<li className="item">
    {itemContent}
  </li>);
  }
   


export default function PackingList(){
  return (
    <section>
      <h1>Sally ride packing list</h1>
      <ul>
        <Item isPacked={true} name="Space suit"></Item>
        <Item isPacked={true} name="Helmet with a golden leaf"></Item>
        <Item isPacked={false} name="Photo of Tam"></Item>
      </ul>
    </section>
  );
}