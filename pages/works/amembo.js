import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
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
  <Layout title="amembo">
    <Container>
      <Title>
        Zahir<Badge>2019-2022</Badge>
      </Title>
      <P>
      Zahir Certification Program is the official forum for zahir certification managed by PT. Zahir Certification Program. Zahir International. 
      This certification program is motivated by the need for users who want to have official legality for the ability to operate zahir applications.
      </P>
      <P>
      Zahir Certified User is a certification given by PT. Zahir International to every user who successfully takes the online certification exam.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows, macOS, linux</span>
        </ListItem>
        <ListItem>
          <Meta>Software</Meta>
          <span>Zahir</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media Platform</Center>
      </Heading>

      
      <WorkImage src="/images/works/zahir.webp" alt="amembo" />
     
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
