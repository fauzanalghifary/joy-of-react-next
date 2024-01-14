import Link from "next/link";
import ScreenSaver from "../../../../components/ScreenSaver";

const ColorPage = ({params}) => {
    return (
        <main className="screen-saver-wrapper">
            <ScreenSaver color={params.color}/>
        </main>
    )
}

export default ColorPage;