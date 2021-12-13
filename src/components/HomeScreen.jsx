import React, { useEffect, useState} from "react";
import { Carousel, Row,Col } from "react-bootstrap";
import { useSelector } from 'react-redux';
import {Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { ORDER_PAY_RESET_ALL } from "../redux/ORDERSTORE/orderType";
import { fetchProduct } from "../redux/PRODUCTS/productAction";
import ProductCard from '../components/Map component/ProductCard'
import { value } from "dom7";
import { fetchOrdersAll } from "../redux/ORDERSTORE/orderAction";

function HomeScreen() {
  const[offerProducts,setOfferProduct]=useState('')
  const[newProducts,setNewProduct]=useState('')
  const { loading } = useSelector(state => state.user)
 const dispatch = useDispatch()

const{product}=useSelector(state=>state.product)

// console.log(products)
useEffect(()=>{
  if(!product) return
const offered =product.filter((value,i)=>value.isOffer)
const sortedproduct= product.sort((a,b) => (a.createdAt < b.createdAt ) ? 1 : ((b.createdAt  < a.createdAt) ? -1 : 0));
const newProduct =sortedproduct.slice(0,4)
setOfferProduct(offered)
setNewProduct(newProduct)

},[product])

 useEffect(()=>{

  dispatch({type:ORDER_PAY_RESET_ALL})
dispatch(fetchProduct())
 },[dispatch])
  return (
    <>
    <div className='carousel-container mb-5'>

<Carousel variant="dark">
  <Carousel.Item>
    <img

      className="d-block w-100"
      src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/21/7d045fdc-9df6-462b-a45e-00d33aa9a2be1637513096176-DK-Main-Banner-1920_504.jpg"
      alt="First slide"
    />
    {/* <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/21/7d045fdc-9df6-462b-a45e-00d33aa9a2be1637513096176-DK-Main-Banner-1920_504.jpg"
      alt="Second slide"
    />
    {/* <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/21/7d045fdc-9df6-462b-a45e-00d33aa9a2be1637513096176-DK-Main-Banner-1920_504.jpg"
      alt="Third slide"
    />
    {/* <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel>

    </div>
<Container>
<Row>
<Col sm={12} className='mb-5' >
<h1>CATEGORIES TO BAG</h1>
    </Col>
      

<Row className='box-container mb-4'>

<Col className='image-container'  as={Link} to={`/catProduct/MENS/`}   sm={12} md={4}> <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFRYYGRgaGhoYGhgZHBoYGBgaGBoaHBgaGhgcIS4lHB4rHxkYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHxISHjQnJSw0NDQ0MTQ0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EAD8QAAIBAgQDBgQCCAUEAwAAAAECAAMRBBIhMQVBUQYiYXGBkRMyocGx0RQjQlJicuHwBxaCkrIVMzTxQ4PC/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQMEAgAF/8QAKBEAAgICAgEDBAIDAAAAAAAAAAECEQMhEjFBBCIyEzNRcUJhgZGx/9oADAMBAAIRAxEAPwDkYWhvBQ1ASL0/yKs2kQrtrBAwlYawTG0bN22YgiDRo8cCJY0e0Vo8YwB8EGjiIx1E4AxjSZEjDZw1414iJL4DWvY2m1FvoDkl2QYxoT4TdI4w7EXAmvpy/Bh5Y/kDImGaky8oIzuLXgHJPyTQwbNHBiIhNEIwWTtFCmdQgseKPaYctnDRwIwj2mW7OoNT2jmMh0j3gfQY9hUhWglhHMnY4rPBgybmDQ6xiWgsOojxs0UwAkRLOHGkrtCqdJT6ZdsnzPoDUfWDcxO2sZ4ZXdhiRvHjGMDMUbCRiYxMiGgoJKOpjRwCdhOoGhM0s0MEzC50HWGpYUIMzi5sDbkPPrB167G+thv4D0noYPSfymefn9Wk+Mf9hhQRRqLnx5yD1Le3LW3tKZq3Gp22vt/ehibEX0Gh2lsYxj0iKU5ye2GVy173/P3g6lSw308InuASSbAe585Qdrk213XTbbSdLSOUbZd/TADYc7+Pl/fhJrWVl1AuNvDzmaKegvppfxAg2qmxGw8PvFN3poYk10zSbDA/KR46yu1xuJVasRa2h2l9mLixAva9/wA/GT5MKauJVjzSVKQG8aMGkpKWXY2aOGkQJIzNI0h4gY14gYGgMKsksgDJU5mS0GK3ZYWO0ZYnMQ+xqKrmRQaxVDrHpbxi1EFli0Ue8eKCQZozVdI1Q6SsQZZhfGLJpq2E+JHLwYWJhCzo2EDREwaiSEW0bTJrGMYRnMAeRPNNHA0gBmPMabW9ekzsOhZgBNSs9tNreGnhylvpMSk+T8EXrMzjHjHyArVzf125ekqsCSRf22hra3INuv8AUbSriamQnfUc/vPRk/LPNir6IZrAg/3/AHpHpvuR1v8AaUXrEnw6SL4g7AmI5lH02Wa7vprvvJB2AA8T5GVVxJ5R1qd655cukHKw8WvARlJ5/mYvg311t5iRapfkI7VieZgbDxZPKLjp9+cK2IN+vIX8fWVzUkGeDkdxZcqJYA9fpICRp1jbr6/aTGslyxp2izBJtU/AoooomylCBklMhJJvA1YGEhaSwUNS2i59Go9hgJCrCrB1jJ72NKTiForINCUo2XQEgloo8UXYQVaBvDVoKUR6EtWxLJRlkjOsI0UlpGInWGhorRGIzrOoPggM19NOstVib7/WAwNtbwjPcm/p+Wk9X0n2zxvWfMgKZN7sbW11Gx285k49WzWPp5TQr1CLgH+kpvTsneOp6nXXa8bk2qFYk1spKsRW8sfC09L/AJQa0zrEUVKSYLLGJhTTtBqusAbETFbxko9ttIThKu/tHtHyGb/BOHK6k9N7dD/f1hSAjAWWEblNjtLwQ4dgyXyNax8xcTHSJyx1sbifuJxohEJK0WWPHWNJKJ1HMcGHRYJBDCIm/BqKDqYKuY4kKkUlsaV7Q6QUmrRj2jgkUUUWdQKsYMROdZHNKeNISmgoEcCDzyQeZpmhGKPmjGcFMUV4iYoFYWESrlB/K/oIYcm2HPUa38ICm1jIVax1O4G5/rPS9JP28TyvWQ91juLE9LcoMgsbb2F/fSWibpfrfaRw5AKjnf67yl7ZPEQwLd0WNz+Et0uFtpvv+M7LAYBXRWOrZR/6h8TgF0NvSLkqKoQRwi8ILEab7iWavAQVuvSdZRwoHK48ZNqOhFvDSL32P4I83fhzKctvGFTB7i2trzr8TQQG5HhA/oK3B1v49JlyO+kuzmf0Ig7WnScFdUYFV1Nl8/EypxKuibG55+HheZaY93buA2BG3npOjLYJRjR3nbPCZsG5G6BX/wBv9CZ5hynqWGxq1aDUqzoGemR8wB1BGoPjPMq9MqbHf8bTs70mLwxfLYIGOIrRWkpZRKSEiTJKYABae8MqwVOHWTyGx6HywDy3mlSqYtdmgQMKsHJiMYQkUVooq0cUqjaxryTRgk9CkiJN2Rkg0cJJFIKib5SIZos8mKcZkmOMQqUhs8bNGCR8sHFGlJizzsKXDjhKK1K+GFapU/8AjZSy06YFyzFdma415TjrTseEdpsSUQORUyutPvckYad4ak3G5jsTUXbF5I89FHiGEw708+FZhc2bDtq6G1/1bftr4byl2ewYqYhFYEANqp3Nt7jlOh7TcJUO7ILEEFlXYkcxpA9mAalYfEF2UZlfUPYaAMd2GvPpK3Jrol+lxls7mnRVRZRYQOOsAOp0AAuxPQDmYZgR+17j7zg+2vF3XIgNs+YkAkXpggZbjUZjmueghlJJUMqtlrHcZancu6Kl8thd2B6HJdQfAm8zKnbCnt+tbxUInsSTOUxNV3uWYlQbBcxKqOSqPAACVskx2B5DqF7RYfMWNOu3TM6G3mABf3msOIh0LqUCbA943PMBRrpz0nAEToeE0XOHYqLnv28L2W/0MTkj+BuPI3oupVUku5pldSoCA3C6MTszEMVAS4ve50EyePVmZlb45dWQtYqKRTKcuQovdvaxFpZ4jgP0ejTqU2zq4IZXUELnC51IIt86kdROequWNz9Nh4AQ41aMZHskgsR46zU4Q5cvRIzZ1JTqrr3gV8wGU+Y6TJLk+kt4KoVfMDYgHXzGX7zWWuIuDfJFmohUlWFiDYjoRuJCJnJJJNydbnxjgyNMvHGskgkV3k0E6T0Zq2GRYVFkFMdXMnlbGoK0qVN4ctAVN4ImkRhkEGohAIZM5hIo2seY4nGcJJWgwZIGeiyHyEUyV4JZIiYexqJq8eQAj3ijSVk7RgIoxnGxyJr9nHGcof28pH8yG9vbNMa8klQqQymxBBB6EQxdOwVs6vtHj674gJT7q3N9NDbTvHczqOF4XIqFgM+QXIte1r2mbw408Ugcrdra5dGR/G245zT4SjqmWoQzC4BHTlfxtLILdmJ1Rq09VuNSOuo9RznnH+IVBi9JzsVKeRU3Fh/q+k9HwrhdJQ7QcHTE0yl8p3Vt8rDY+UfKPJJk35R43YGw28YsTSCgag+U1sf2fxFMnNTYgG2ZBmU+2sfC9k8RVAZlFNNyz72/hQan1tM8kkJ+nKzBwmGao4RdzueSgbk+U9K4VwoJQK2sbfQbff3mPwbhgVylMXVCC5J7ztyvbQL4DTznbFLrcjILW16zC92yuEePZxuOp5aTowORvmFrgkbEfut4zhsXhyjWO3I9RPV6lAd9M65coe99BkIJBnOY6vhyUS2dHBuSNEe5Asf3SIvcQzimziKY1Atck6DmfAeM6DiXBKmGCGotmqLnIGuQX0Unr1nXdnuCYf4isqKCpDC+vteB/wAT6zLUpOjkdxtjv3uY5xnH6kW+hLXCSOFUyWaO2ND2zot/3l7p9RtGKX+Q3/H2iJY+I6M21Ys0IjysVkkvMONo0pUWoVDBoIRRJpLY6PQi0ExkngyYKNhqcJIJtJTDOaJxSEUOgGcokwIlkpc+iRDqI4iBkgItsYhARWiMQMwMHijWiUTjhWkarhRrvyEnUbILnfp0lOgM73Mqx4b3IRPLTpHadgK5FQhtFZdAB0IYk/UTqGx4NQLTGZQTnbozfLfxJE5fsvikpOzvpZCANzrb8jJ9jKmdsX/9dQeQdwx9mEqlCkqFwlJ3rR2yEcpZVpl0aplxaotOiwuI2PqhQCN5zXFeItlPjp7zRx1QnnObeoGqEubJTGY/xG9gPGJk3J0hyqMbZaw2GajSco+QsLszbZt9LfhMT/MFZLo7iqvU93XwIlXinGHrMFF7A91RI4PgzEFqhyDz1muKqhPOUnohxfGVSMugVtbqb5h0vbaZ+GxRXQ6qdxOnGEpWCqjuQL7FiOmwlM4Gi2dGRlfKctrghrXF15jSBRSBJN7sscAxhZ1AJIBG+/rDf4i1cz0ugpn3za/h9Zn9me45dzsunnF2ofOiPe9iV/v1BhhpNIzOTpM5hjJo9jmBseslQRWdQxyqTYt0hAERzfvICRpztsYaQIztNFyhVpN/3Cy32ZRex53EuJwtG1p10b+EnK3lrKGLxaVGXKmRbWNre8PgeDGoxKVEyDdmNreawOMZaoEpy02TrUHQ2dSD9PeRUzUTC0U/VjEq3gwul/PlM+tRKNlJXXYhgV95Lk9PKPx2U480Zd6APIgS9iOG1FXMVuvVdR9JREllFx7RTGSktBljmJBHJi12aY0UUU3RkoAyayAEksrk9EqCR7xo6qSbCKY1dWOBHaX8Lwpm1d0pr1dgD6DeaifoFDUk4h+g0QHxjY4Jy30hcs0YswqODd1LBTlG7WNh6ydXKi6b8z1PhN1sfUrlEIFNHKqqgZUAPPxAjdoeBU6SArXV2JsQLaab6SuGCMd+QLNtWvJx1d+UNwtBck8tpLFcPcKr2uGvtuLabSWCp2A01OsYuxa9+RtHWdl8JTc1HqkWCi1zYXN4b/DNlOMrodnpEDnezC/0MB2Z4T8ZamZ8uUchfcHb2lHsZXFHiNLXRsyH1U/cCbktHOrbbOqxYahUNN73Gqnk6ciP4hsR4SzTxIIuDOm7RcGTEplOjDVHGjI3Ig/bnPOMS9XCvkrjuk2WoPkbpf8AdPnJ5RfaDGS8mrWfW0wOP4RsnctqdZdq1b6jnrcbQlGnnGpilY2TTjRkdnuCvY1MyqdR3gSbeE18MDTKlwlQK4cliVJUXugBNunLlLJpsFIXYTIr4Ku98tgOdwY6Ml5VmYpRVGxiOO3qmtSypmpimVILAZWLK3IX7xEy8Li0Uuw7zOTdjqSSCD+J9xK3/RnPdZz4gWAlzhvD0R1BP9iacr1VGJaRicUHwVvzYXA85Wqa4EE6kN/+jK/aHHGrXdv2VORR0C6f1ldRU+Fpm+HfX92/j4zMdWLlBtJ2USIxGkmRGM5uxmOPG7GpmShKWHY65Wt1sbe8tU+FVXGZEYi9tBznJO9AnTxr8lOTWXjwTEDek/tH/wCjYi1/hPbymmnQpNJ2itSxDLqrsPI2hTiy3zWPjsYOtg3RsjIwbTS2usmvDqp2pv7GYcVJU0bnLjK4ss03HWO0p1cPUp2LIwvffnbpLSNcA+EgzYOO0VY8rl2Siiik9sbZQljDYR6hyohY+A28zyh1waBCS4LhrZAOVtSW84kqMBlDEDoDYfSenHC5dkU8ii6ZsUeBUqa3xNdQ2tqad9zbkTsvKC4TxGhSLGpR+ITbLc2AtvvvymYgjMOcojijFaDKUvpp+X/w6b/MODb5sEv+nLf7Rm45hl1oYNA3IvY2P8onNIsKqxvgj80Hx/EXqvmc3IFhYWAHQAbCZuIaFLd6V8QdZmXR6ailNL+iNHFujAqx8jqNfCX0N9Ta8zkS7L7+00coMEUQzfuZ2fYQ9yv/AKfwacO9YpiEcfsup9M1j9LzuOwWi1x4L+DThOKL3/X7zbMeT3vAYjPTAvraUeIYJXUo65lPXUSh2axuakjc7C/nadA7BxrvDKPF0MjtHmPFezFWhd8K2dNzSbW38pmJQ42FbLUVkYbq09ddBrMPjHZ6nXBzqCf3ufvMywxl0bUjmcPx1DpmW/LXWFqcYUCwIv6fhMDjfYw0lLq9kH73LXrK/DOy7v36jkJvYfMw+wivozukac0jW/6jnPdDOx5KCfwluhhHANWt3QoJVAbnTYt08pmcL4icPXNKolkzCzDZQ2i3PQzd7VVsmGdhzWwP8xA+8diwx25PaFyyPo80zk3J3JJ9zebvDVzYSqvQk+wB+0y8Hg3dWKrcLv157e02OzFHMlVOf9CIpdmMiS6ZzokssnksbdPtJZec7iBM3qnHKj0vhrR7tgC4BO3O9rR+FYrFDMtEX2JFh0sN/KDw/aF0ofBCLYDLc3uQfCVMHxerTJKEC4sdAdPWG0ntjIxcotpKjoDV4gdSAPRREMTjxpYH/bMlu0WII1f2VR9ojxqvb5z7D8pvsSl+SHFTiRUD1LZ9DfTlpylxq+NdRooG/IbzIx+OqPq7E+0mvFq2UDObWtyi5d0McXSZLiD1u4KpvqSB7A7SIWGwASrrWqEW2JI6yWJyWQIdgQffT6Sb1HxHYH7qAxSOaKefRZZe4Vw4164ooVUsGOY7d0X8zOmXsJr3sQvov9ZyWEXNVRc2XMwBYbgMbE/WdseyNFfnxLeOqjbznuxPKlLnKznsRwummI+Eal0DKpfQCxsWP1m2/BeHKLHEXP8AOv2Ew8Lw+gcRkd7UwzAkkC4W9jmHWwm/+gcMX9sE/wA7W+htCMnLqNsimB4Wm9Qt5ux/4iRqPwzKQu9jb597afWTKcLHNf8AdUP0vK2KfhwR8ls+U5fn3tpv4zkLS2jJ4PUwocmsLrlIsQSM0p8d/RnqqKJyqcoO4Fze570u8Jr4RS/xlzXAy90m3U7TL4muHeufhnLTJHXQW72h53vMypj26k+0T4lgkouAj5+7flpfyldKoEEaYU2vfxh6SDzmkbi8NbTbOi7O8Y+ClWy3LW35aHpOXxrl7noLzv8AstTRcJXchdC9ybckGxnO9ncDSr1Gp1S1ytwAbZiPmF7dD+MJlSgrdfo6PsVXJpZToyGxHTn9QbzsMPWtOW4XhvhOrD90JUHXLoreY/Azp/hcxHS2lYhP8Fp1vrHCCAoVCDYwzuFUs2wufaIl7Rq2cf294ii/Dw5sQXVqg1JFMa3IHK4EbH8apJhmdchsi5AtiXqMcoWw5C15ocPxGHqmu6Mr1UZGqaXJS4Ftd1C3Gky8Tw7BYKu1Uh3QuCFAzLRVvmaw2G++sll6iSV+B8MMXKndqn+ypwnidFFZKyGk7slV1qC+bKRYoTysDp4zE4/infDlWUL8Sr+qQEZvh3uBl3FtB6ztcZgKGLpB/hM6IzPTfMEsHtodzbna043g/DmevndsyUs2UnU6tpc+l4MbkpUnYMvGUW6p/gBjaf6NhlQfO9/O5+Y+g09Zk8D4h8F7kXQ2DDS9uohO0GP+NWZh8o7qjlYc/WZbCP8AJJRYxarnfLqpYkEdCdJBSIl6QtWgUNmBB6HQ+07ZQo4lFcmQq961ht9YFRL2JwjovfUptYEEE353lUtobDXw3mWrY6PFRfFaAk2NpZQ6QFDCOxvkc+Sky/T4ZXb5aT+xE3EhlV2ipiBp6wSA7TQrcOqhLlGAFrk8ukEmBfIzhe6u56WFz9JmSblY219L+7K1Mge+svZLcrTPw1Mu+UGwF2duQVdSfpNUYg19VS1l11vtv9tJN6iLlHRrBJKWyvFI5rR5EWbO1/zBhgqq9AFufdW2pO15ylUi5sTa5tfe19JFtQDztr6SObT1/v7z2/FnlQi+dEF3hGAgEOohW3gTtFXqV7l+hzvJPosSiRxW0PgVhV5Ev7APpyNjtLOD4d+rNdx3c+Sn/EbXY+IA/GAaoWUAn5QAPAa/+o+Hqk2TM2W+19ATpe20Xq9lWWEm21olUAJhqSdJZ4lwqpQymqoAckKQb6i2httvINhHFFq+XuBsl+ZY7W6i+l4whSotvxQ/AGHW4XMWc/vbZR5C0z6Vdqbq6EhkII+49dvWQpnTXeJ9ROCeg0HSsq1VOji+nK+hB8iJ0HBXJXI266X6jlPPuxOM+egTt308tA35zusGSCGG438Y5PlACpSo2Wpgzle31WoKIpUw2VmBqsurJT56DU3nUYrFpTptVf5VUsbc7C9h5ziODdpQ+Gr4mqXch2IpIALA6KC1rhbbmR5pVGroqxJuSaVheF8PwRb4+FrKCqZXRbg5Da+dG05HW0H2SoNUatVdmanVYilRADZtbfEcnRQeQ5wnZThCvh6jujr+k5mPwl+RDcKoY6DS59ZnUviYGvSw9AvVSqxC0myh05FlKnQa85K7e5K14RS6tpOn5bB0uGImMrJScIEpkOMx+ElR72HQ2AufEzHpcUFLDPRH/cLlS66Ky3tcc9h9Zr43BvgsQfhBGSo5Dq4zlGIOoYH+9ZyfFXQ1HCCyg23vcj5j6m5m8Ncm6pmMnukot6/JSMhaS8IrSlCZ4XHa2jpOxnC/iVTUcXSnr4Fz8vtvDuDi8f3fkQ6kDdUPPrczQxDfoeBybVKmnjmYXY+i6SXZ6mMLhHxDjvMM3jbZB67+s3RN2Y/bTF56wpg92mNf5jqfpac9Sr5HBABtr9IWpULFnc3JuT5neUUNyTMSZRjumr8HR0O1LoLLTX33llO2FUi4RB5kzk2YwiPpDyZPSNzH9oaroUIUBrXsDfQ36yjQ4m1sjEZCbtp4So5uJLh7Us5+NfJlNh1blMOTseox+i3WywpNW9OioRCe+9rXHiekc4xEV6dIX7y9/n3NyPMytjeJ5hkprkTmeZ/KVKbWEzLoXDbNS/hFJUE7o8opFaLKYk5fy/nILziinp/xIV80BT5hLX7XrFFBDplHqvmv0THORxPyiKKafQr0/wBxEB8h/lb/AJLKeH3iimPKKM/b/Z6L2o14ehOp/V6nU+8hS14UL66HfXZhHim/JGujiRJjb1iihD4D9l//AC08n/4men4LZvI/hHijcXxMv5FXG64RL66PvrOK/wAP/wDyGXkaJuOR73MRRSL1vwX7LvSfNj8CxdROIPTR3VM/yKxC/MP2RpOmrm2OrkaEYcWI0I1Ox5RRRMfuxHZ/jP8ARW7c91MLl07lU6aa23855yu0UUd/Nnnr7Uf0JtxDURqPMRRRiLsX2mdF2uYlcNc37p31/aE2O3emGpgaDOug0/ZMaKa8nnI4Kv8AIPSVqe0UUXLsoxef0RaTXaKKFk5MyrViii32UL7P+SNOMsUUL+IrH8kdCmw8h+EaKKeaeif/2Q==" alt="men image" />
<h5 className='m-4'>MEN</h5>
 </Col>
<Col className='image-container' as={Link} to={`/catProduct/WOMEN/`}  sm={12} md={4}> <img src="https://images.unsplash.com/photo-1524255684952-d7185b509571?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="men image" />
<h5 className='m-4'>WOMEN</h5>
 </Col>
<Col className='image-container' as={Link} to={`/catProduct/KIDS/`} sm={12} md={4}> <img src="https://images.unsplash.com/photo-1476638305939-a09cd694566c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGtpZHMlMjBmYXNoaW9ufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60" alt="men image" />
<h5 className='m-4'>KIDS</h5>
</Col>
</Row>
  
</Row>


<section>
<Row className='mb-4'>
  <Row><Col>  <h3>New Arrivals </h3></Col></Row>
{newProducts&&newProducts?.map((values,i)=>{
   return  <Col sm={12} md={6} lg={4} xl={3} key={i}>

    <ProductCard product={values} key={value._id}/>
    </Col>
            })}
</Row>
</section>
<section>
<Row className='mb-4'>
  <Row><Col>  <h3>Todays Deal </h3></Col></Row>
{offerProducts&&offerProducts?.map((values,i)=>{
   return  <Col sm={12} md={6} lg={4} xl={3} key={i}>

    <ProductCard product={values} key={value._id}/>
    </Col>
            })}
</Row>
</section>

<section>
<Row className='mb-4'>
  <Row><Col>  <h3>All Products</h3></Col></Row>
{product&&product.map((values,i)=>{
   return  <Col sm={12} md={6} lg={4} xl={3} key={i}>

    <ProductCard product={values} key={value._id}/>
    </Col>
            })}
</Row>
</section>
</Container>
{/* <ProductScreen/> */}
</>



  )
}

export default HomeScreen
