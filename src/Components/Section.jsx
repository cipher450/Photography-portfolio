export default function Section(props){
    return (
        <section className="section" id="galerie">
             <a href={"/Photography-portfolio/" + props.titel}>{props.titel}</a>
            <img src={props.image} alt="" />
           
        </section>
    )
}