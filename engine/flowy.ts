export class flowy {
    loaded: boolean;
    canvas: Element;
    spacingX: number;
    spacingY: number;

    constructor(
        canvas: Element,
        grab: (block: Element) => void | null,
        release: () => void | null,
        snapping: (
            block: Element,
            first: boolean,
            parent: Element
        ) => boolean | null,
        rearrange: (block: Element, parent: Element) => boolean | null,
        spacingX = 20,
        spacingY = 80
    ) {
        this.canvas = canvas;
        if (grab == null) {
            grab = dummyFunction;
        }
        if (release == null) {
            release = dummyFunction;
        }
        if (snapping == null) {
            snapping = () => true;
        }
        if (!rearrange) {
            rearrange = () => false;
        }
        this.spacingX = spacingX;
        this.spacingY = spacingY;
    }

    load(): void {
        if (this.loaded) return;
        const el = document.createElement("div");
        el.classList.add("indicator");
        el.classList.add("invisible");
        this.canvas.appendChild(el);
    }

    import(output: FlowchartData): void {/* eslint-disable-line @typescript-eslint/no-unused-vars */
        return;
    }

    output(): FlowchartData {
        return { html: "", blockarr: [] } as FlowchartData;
    }
    deleteBlocks(): void {
        return;
    }

    beginDrag(event: MouseEvent): void {/* eslint-disable-line @typescript-eslint/no-unused-vars */
        return;
    }

    touchDone(): void {
        return;
    }

    endDrag(event: MouseEvent): void {/* eslint-disable-line @typescript-eslint/no-unused-vars */
        return;
    }

    moveBlock(event: UIEvent): void {/* eslint-disable-line @typescript-eslint/no-unused-vars */
        return;
    }

    private snap(drag: Element, i: Any, blocko: Any): void {/* eslint-disable-line @typescript-eslint/no-unused-vars */
        return;
    }

    private touchblock(event: UIEvent) {/* eslint-disable-line @typescript-eslint/no-unused-vars */
        return;
    }

    private hasParentClass(element: Element, className: string) {/* eslint-disable-line @typescript-eslint/no-unused-vars */
        return;
    }

    private checkOffset() {
        return;
    }

    private fixOffset() {
        return;
    }

    private rearrangeMe() {
        return;
    }
}

export interface FlowchartData {
    html: string;
    blockarr: Array<Block>;
}
export interface Block {
    id: number;
    parent: number;
    data: Array<BlockData>;
    attr: Array<Attribute>;
}
export interface BlockData {
    name: string;
    value: number;
}
export interface Attribute {
    id: string;
    class: string;
}

function dummyFunction(): void {
    return;
}
