import { lineWobble } from 'ldrs'

lineWobble.register()

export default function Loading() {
    return(
        <l-line-wobble
        size="35"
        stroke="8"
        stroke-length="0.15"
        bg-opacity="0.1"
        speed="0.8"
        color="white"
        ></l-line-wobble>
    );
}