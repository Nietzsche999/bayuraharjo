import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="pichu*pichu">
    <Container>
      <Title>
        Scientific Computing with Python <Badge>2021</Badge>
      </Title>
      <P>
        Python is one of the most popular, flexible programming languages today. 
        You can use it for everything from basic scripting to machine learning.
        In the Scientific Computing with Python Certification, you'll learn Python fundamentals like variables, loops, conditionals, and functions. 
        Then you'll quickly ramp up to complex data structures, networking, relational databases, and data visualization.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Freecodecamp.org</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Full of Python Languanges</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Course</Center>
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
          <Link href="https://www.freecodecamp.org/learn/scientific-computing-with-python">
            <Badge mr={2}>Course</Badge>
            Scientific Computing with Python{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <WorkImage src="/images/works/python2.png" alt="Pichu*Pichu" />
      <WorkImage src="/images/works/python.png" alt="Pichu*Pichu" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
