import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data: genres, error, isLoading } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover" //Adjust aspect ration for big images that are rendered small to look better
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant="link"
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
