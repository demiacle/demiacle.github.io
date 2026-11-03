import { useState, type ChangeEvent } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

interface Field {
  name: string;
  value: string;
}

interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
}

/**
 * Dev-only form for drafting a new portfolioData entry.
 * Saving is not implemented yet (it never was in the original).
 */
export default function AddNewProjectModal({ isOpen, onRequestClose }: Props) {
  const [title, setTitle] = useState('');
  const [urlLink, setUrlLink] = useState('');
  const [image, setImage] = useState('');
  const [imgPoster, setImgPoster] = useState('');
  const [fields, setFields] = useState<Field[]>([]);

  const addField = () => setFields((prev) => [...prev, { name: '', value: '' }]);
  const updateField = (index: number, prop: keyof Field) => (e: ChangeEvent<HTMLInputElement>) =>
    setFields((prev) => prev.map((f, i) => (i === index ? { ...f, [prop]: e.target.value } : f)));

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <button type="button" onClick={onRequestClose}>
        x
      </button>
      <br />
      <label>
        title
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        url link
        <input type="text" value={urlLink} onChange={(e) => setUrlLink(e.target.value)} />
      </label>
      <br />
      <label>
        image file
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      </label>
      <br />
      <label>
        image poster file
        <input type="text" value={imgPoster} onChange={(e) => setImgPoster(e.target.value)} />
      </label>
      <br />
      <button type="button" onClick={addField}>
        +
      </button>
      <div>Name | Value</div>
      <form>
        {fields.map((field, index) => (
          <div key={index}>
            <input type="text" value={field.name} onChange={updateField(index, 'name')} />
            <input type="text" value={field.value} onChange={updateField(index, 'value')} />
          </div>
        ))}
      </form>
    </Modal>
  );
}
