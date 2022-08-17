import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Menkiki (麺利き)">
    <Container>
      <Title>
        Winter Space <Badge>2022-</Badge>
      </Title>
      <P>
        Website for gamers community meets each other around the world.
      </P>
      <P>
        But this website is not yet already done, because this is a little hard to handle a bug from this website, and working with  a small team.
      </P>
      {/* <UnorderedList my={4}>
        <ListItem>Ramen shop recommendation based on photo</ListItem>
        <ListItem>Show shops near your current location</ListItem>
        <ListItem>Open in Tabelog/Foursquare</ListItem>
      </UnorderedList> */}

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>All Platform</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JavaScript, react-native, three.js, PHP, Html, CSS</span>
        </ListItem>
        {/* <ListItem>
          <Meta>Presentation</Meta>
          <Link href="https://speakerdeck.com/craftzdog/the-fun-deep-learning">
            The fun Deep Learning <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Presentation</Meta>
          <Link href="https://speakerdeck.com/craftzdog/caffedeoshou-qing-ben-ge-deipuraninguiosapuri">
            Caffeでお手軽本格ディープラーニングアプリ @potatotips{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/craftzdog/caffe-ios-sample">
            github.com/craftzdog/caffe-ios-sample <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
      </List>

      {/* <Box align="center" my={6}>
        <Link
          className="link-appstore"
          href="https://itunes.apple.com/app/id1035645520?mt=8"
          target="_blank"
        >
          <Image
            maxW={240}
            src="/images/works/appstore.png"
            className="image-appstore"
            alt="Download on App Store"
          />
        </Link>
      </Box>

      <WorkImage src="/images/works/menkiki_eyecatch.png" alt="menkiki" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/menkiki_01.png" alt="menkiki" />
        <WorkImage src="/images/works/menkiki_02.png" alt="menkiki" />
      </SimpleGrid> */}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
