import  { useState } from 'react';
import {
  Box, Heading, Textarea, Button,
  Text, VStack
} from '@chakra-ui/react';
import { summarizeText } from './api';

export default function App() {
  const [input, setInput] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    setLoading(true);
    try {
      const res = await summarizeText(input);
      setSummary(res);
    } catch (e) {
      setSummary('Error generating summary');
    }
    setLoading(false);
  };

  return (
    <VStack p={6} spacing={4} maxW="800px" mx="auto">
      <Heading>AI Text Summarizer</Heading>
      <Textarea
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Paste text here..."
        rows={8}
      />
      <Button
        colorScheme="teal"
        onClick={handleSummarize}
        isLoading={loading}
      >
        Summarize
      </Button>
      {summary && (
        <Box p={4} borderWidth={1} borderRadius="md">
          <Text fontWeight="bold">Summary:</Text>
          <Text mt={2}>{summary}</Text>
        </Box>
      )}
    </VStack>
  );
}