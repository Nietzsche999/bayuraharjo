import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="freeDBTagger">
    <Container>
      <Title>
        Responsie Web Design <Badge>2022</Badge>
      </Title>
      <P>In this course you will learn for Frontend Developer how to handle responsive web design.</P>
      <P>
In this Responsive Web Design Certification, you'll learn the languages that developers use to build webpages: HTML (Hypertext Markup Language) for content, and CSS (Cascading Style Sheets) for design.</P>
      <P>
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>freecodecamp.org</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Html, CSS, JavaScript</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://www.freecodecamp.org/">
            <Badge mr={2}>Freecodecamp.org</Badge>
            Platform{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://www.freecodecamp.org/learn/2022/responsive-web-design/">
            <Badge mr={2}>(New) Responsive Web Design</Badge>
            Course{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <WorkImage src="/images/works/web.png" alt="Responsivewebdesign" />
      <WorkImage src="/images/works/python3.jpg" alt="freecodecamp.org" />
      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
