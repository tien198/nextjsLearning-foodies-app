import type { PropsWithChildren } from "react";

export default function MealLayout({ children }: PropsWithChildren) {
    return <div>
        <p>Meal Layout</p>
        {children}
    </div>
}