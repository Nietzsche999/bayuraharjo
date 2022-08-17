import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoDiscord, IoLogoLinkedin } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbSpotify from '../public/images/works/kira.jpg'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an accountant and frontend developer based in Indonesia!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Bayu Raharjo
          </Heading>
          <p>Just Human Being (Accountant / Developer / Designer)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/bayu.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Bayu is a accounting student and a developer based in Jakarta with a
          passion for building digital services/stuff he wants. He is love to technology 
          such as artificial intelligence, 3D design, web developer, and all the
          way to solving real-life problems with code. When not online, he loves
          hanging out with his friends on real life and online friends. In his free time, he 
          likes to code and make design espicially 3D design. Currently, 
          he is build some project RobotAI, and website for his project it's called {' '}
          <NextLink href="https://bayuraharjo1945.editorx.io/bayuraharjo" passHref scroll={false}>
            <Link>Winter space</Link>
          </NextLink>
          . He publishes a lot of bots for a lot of server and his bots called &quot;
          <NextLink href="#" passHref>
            <Link target="_blank">Rosé, Winter, Yumeko</Link>
          </NextLink>
          &quot; , and already watching more than 50k server.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My projects
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Born in Jakarta, Indonesia.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Graduated from Suluh High School, Jakarta.
        </BioSection>
        <BioSection>
          <BioYear>2018 to present</BioYear>
          Majoring in Accounting at Gunadarma University.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          3D Desingn, Art, Design, Music, Playing Games, Playing Drums, Tecnology, and Rosé are Rosie♥✨
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the Social
        </Heading>
        <List>
          <ListItem>
            <Link href="https://instagram.com/bayurhj/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @bayurhj
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/bayuraharjo_" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @bayuraharjo_
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoDiscord />}
              >
                @Kira Yoshikage #2689
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/bayu-raharjo-100759245" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @Bayu Raharjo
              </Button>
            </Link>
          </ListItem>
        </List>

        {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="#"
            title="Galaxy Gaming"
            thumbnail={thumbYouTube}
          >
            My own Discord server
          </GridItem>
          <GridItem
            href="#"
            title="Your Weakness"
            thumbnail={thumbSpotify}
          >
            My Spotify Playlist
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box> */}
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
