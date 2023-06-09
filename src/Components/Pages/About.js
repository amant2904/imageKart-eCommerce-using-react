import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import classes from "./About.module.css"

export default function About() {
    return (
        <React.Fragment>
            <Container fluid className='bg-secondary d-flex flex-column align-items-center'>
                <h1 className={`text-light text-center ${classes.header_text}`}>The Generics</h1>
            </Container>
            <h1 className='text-center my-4' style={{ color: "aqua" }}>ABOUT</h1>
            <Container className='border border-5 p-4'>
                <Row className='my-2'>
                    <Col md={3}>
                        <img src="https://prasadyash2411.github.io/ecom-website/img/Band%20Members.png" alt="about" style={{ height: "100%", width: "100%" }} />
                    </Col>
                    <Col md={9}>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere velit molestiae earum ipsam, vel, amet, commodi unde iure aliquid sint distinctio soluta labore quae voluptates neque quia sunt odio ut consequatur non tempore nisi adipisci ea. Dicta laboriosam inventore debitis atque, optio, esse dolores, numquam quasi asperiores accusantium commodi consequatur aspernatur non! Nesciunt voluptates dolorum labore, aut incidunt rem autem corporis repellendus, unde recusandae illo pariatur. Harum perferendis eveniet repellat eligendi in? Eos necessitatibus error ab consequatur perferendis illum sed quas quasi, doloremque, repudiandae eius fugiat suscipit at excepturi totam? Consectetur magni, eius quia neque quasi ratione nam! Assumenda doloremque dolorem, perspiciatis sit similique quam tempore vero labore eos facilis ratione cumque quaerat nihil aliquid tempora aliquam. Vitae saepe dicta sequi exercitationem. Nemo similique inventore facere, voluptatem eius ipsum ab, consequatur aperiam soluta praesentium corrupti tempora! Ipsa reprehenderit accusamus, iure eum a assumenda, soluta nihil, magni tenetur exercitationem maiores! Necessitatibus incidunt debitis saepe rem id laboriosam itaque obcaecati ea quos modi, error deserunt odio neque velit quae nobis eligendi minima sequi nisi nam perferendis consectetur? Nisi ut eius, voluptate nesciunt itaque consectetur ipsam quod pariatur. Iure unde tenetur neque corporis, beatae alias mollitia iusto quo, odit eius magni cum fuga?</p>
                    </Col>
                </Row>
                <Row className='my-3'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, omnis minus facere dolores quam, adipisci dolor neque rerum iste eaque reprehenderit aspernatur quaerat repellat dicta! Similique necessitatibus illo dolor. Tempora officia reiciendis error mollitia beatae praesentium esse eligendi adipisci pariatur quos, consequatur eum, culpa rerum. Eius similique placeat, iure reiciendis fuga perferendis enim assumenda ab officia architecto cumque, rem, numquam officiis repellat. Sed nostrum pariatur iste fugiat sequi optio commodi enim! Culpa id sequi cum qui maxime consectetur autem vero, tempore, molestias et, dignissimos veritatis nihil. Error architecto, sed quae cum eaque illum qui enim dignissimos molestias debitis commodi nobis aut quaerat nostrum corrupti veniam aliquam, dolor libero odio ex perspiciatis fugit? Nobis rerum similique culpa eum. Quo perspiciatis ducimus adipisci facilis veritatis saepe. Officiis quia consequatur fugit! Voluptates, qui? Facilis ad ipsam eveniet sit fuga dicta sequi veniam. Atque libero totam dolores eos officia quidem quas delectus inventore cumque necessitatibus doloribus a, iure corporis quis autem tenetur odit laboriosam fugiat officiis vero dignissimos ut animi. Repudiandae totam, ab ducimus, eius facilis impedit culpa praesentium reiciendis tempora asperiores veniam hic aliquam earum! A, esse repellat in ad nam placeat consequuntur. Eius similique nostrum placeat enim quam quae odit dolorum voluptatibus dignissimos. Ad facere, modi, voluptatibus quisquam officia explicabo libero beatae assumenda sapiente unde neque obcaecati suscipit aliquam itaque dolores incidunt eos quos. Quidem sapiente molestias delectus natus maiores eos quisquam saepe reprehenderit nulla, voluptatibus molestiae officia laborum accusantium dolores aut tempore eaque. Quaerat vero corrupti quia, magnam consequatur quasi quo quos similique rem culpa ullam, iste ut recusandae nulla! Iusto cumque error voluptate architecto voluptatem sapiente tenetur ipsa doloribus quo dolor. Dolorem, corporis similique maiores dolore inventore quam blanditiis necessitatibus, assumenda vero vel recusandae! Ea tenetur eius, voluptate officia architecto dolor harum delectus ipsa praesentium eligendi libero quibusdam totam qui provident debitis unde ullam nihil aperiam, minima vero fuga rem illum, quaerat dolorem. Repudiandae perspiciatis suscipit asperiores adipisci amet quo officia earum? Tempora aperiam perspiciatis architecto, consectetur pariatur obcaecati minima reprehenderit cupiditate exercitationem dolores officia. Incidunt nobis tenetur ratione quod! Est veritatis porro reprehenderit. Qui voluptatum quia voluptatibus minus officia enim pariatur et. Laudantium culpa dicta tempora quas. Nemo ipsam corrupti velit neque hic quod officiis iusto magni dolor, fugit nihil eum repellat accusamus rem, aut quas. Officia, nihil dolores! A aperiam harum quam reprehenderit quod, veritatis officiis earum? Corrupti nobis ipsam eum, beatae repellendus explicabo vitae in dicta quasi!</p>
                </Row>
                <Row>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque in repellat quasi nisi repellendus ut voluptatum, ex dicta, facilis nam quidem suscipit provident similique dolorem! Ipsam pariatur fugit amet sint voluptas eum!
                </Row>
            </Container>
        </React.Fragment>
    )
}
