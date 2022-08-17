import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
// import VoxelDogLoader from '../voxel-dog-loader'
// import App from '../spline/app'

// const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
//   ssr: false,
//   loading: () => <VoxelDogLoader />
// })

function Main({ children, router }) {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Bayu's homepage" />
        <meta name="author" content="Bayu Raharjo" />
        <meta name="author" content="Bayu" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/bayu.ico" type="image/x-icon" />
        <meta name="twitter:title" content="bayuraharjo" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@bayuraharjo_" />
        <meta name="twitter:creator" content="@bayuraharjo_" />
        <meta name="twitter:image" content="https://www.craftz.dog/card.png" />
        <meta property="og:site_name" content="Bayu Raharjo" />
        <meta name="og:title" content="Bayu Raharjo" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.craftz.dog/card.png" />
        <title>Bayu Raharjo - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {/* <LazyVoxelDog /> */}
       
        <iframe src='https://my.spline.design/rubik-286fba8c849d66cfec70975b292fec61/' frameBorder='0' width='100%' height='350px'></iframe>
        
        {children} <iframe src='https://my.spline.design/totorocopy-c7f073c13771257c0622641fa8dd5a2b/' frameBorder='1px solid #fff' width='100%' height='270px'></iframe>

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
