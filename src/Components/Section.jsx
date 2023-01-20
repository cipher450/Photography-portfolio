export default function Section(props){
    return (
        <section className="section" id="galerie">
             <a href={"/" + props.titel}>{props.titel}</a>
            <img src={props.image} alt="" />
           
        </section>
    )
}