import Image from "next/image";
const displayicons = (img1, img2, img3, img4, img5) => {
  return (
    <ul>
      <li>
        <Image src={img1} />
      </li>

      <li>
        <Image src={img2} />
      </li>

      <li>
        <Image src={img3} />
      </li>

      <li>
        <Image src={img4} />
      </li>

      <li>
        <Image src={img5} />
      </li>
    </ul>
  );
};
export default displayicons;
