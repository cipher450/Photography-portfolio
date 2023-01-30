import Link from 'next/link'

export default function Section(props){
    return (
        <section className="section" id="galerie">
             <Link href={"/" + props.titel}>{props.titel}</Link>
            <img src={props.image} alt="" />
           
        </section>
    )
}