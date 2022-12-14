import { useState } from "react"

const dataCollection = [
    {
        question: 'question 1',
        answer: '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque expedita maiores repudiandae saepe dignissimos pariatur soluta facilis eligendi accusantium natus?'
    },
    {
        question: 'question 2',
        answer: '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque expedita maiores repudiandae saepe dignissimos pariatur soluta facilis eligendi accusantium natus?'
    },
    {
        question: 'question 3',
        answer: '3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque pariatur soluta facilis eligendi accusantium natus?'
    }
]
export default function AccordianTest() {

    const [accordian, setActiveAccordian] = useState(-1);

    function toggleAccordian(index) {
        setActiveAccordian(index)
    }
    return (
        <>
            <div className="container">
                <div>
                    <span className="accordinTitle">
                        FAQ
                    </span>
                    <h1>Answer Some Question</h1>
                    <div className="accordian_faq">
                        {
                            dataCollection.map((item, index) =>
                                <div key={index} onClick={() => toggleAccordian(index)}>
                                    <div className="accordian_faqHeading">
                                        <h3 className={accordian === index ? "active" : ""}>{item.question}</h3>
                                    </div>
                                    <div>
                                        {accordian === index ? (<><span className="vertiacl">-</span></>) : (<><span className="vertiacl">+</span></>)}

                                    </div>
                                    <div>
                                        <p className={accordian === index ? "active" : "inactive"}>{item.answer}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
