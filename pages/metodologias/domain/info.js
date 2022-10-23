import Link from "next/link";

const info = () => {
    return (
        <>
        <Link href={"/"}>
          <a>
            <img alt="Logo vocablo"
                 src="/logo_vocablo.svg"
                 width="170"
                 className="m-2"
            />
          </a>
          </Link>
        <h2>Info</h2>
        </>
    );
};

export default info;