import css from "./Container.module.css"

export function Section ({children}){
 return <section className={css.section}>{children}</section>
}