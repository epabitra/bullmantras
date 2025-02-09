import Count from "../../common/Count";

interface DataType {
   id: number;
   count: number;
   count_text: string;
   text: string;
};

const count_data: DataType[] = [
   {
      id: 1,
      count: 250,
      count_text: "+",
      text: "Happy Students",
   },
   {
      id: 2,
      count: 89,
      count_text: "+",
      text: "Testimonial",
   },
   {
      id: 3,
      count: 156,
      count_text: "+",
      text: "Seminars",
   },
   {
      id: 4,
      count: 22,
      count_text: "+",
      text: "Award Achieved",
   },
];

const Counter = () => {
   return (
      <section className="fact__area">
         <div className="container">
            <div className="fact__inner-wrap">
               <div className="row">
                  {count_data.map((item) => (
                     <div key={item.id} className="col-lg-3 col-6">
                        <div className="fact__item">
                           <h2 className="count"><Count number={item.count} />{item.count_text}</h2>
                           <p>{item.text}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}

export default Counter
