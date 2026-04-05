import torch
import json
import sys

def convert_weights(pth_file, json_file):
    print(f"Loading weights from {pth_file}...")
    try:
        checkpoint = torch.load(pth_file, map_location='cpu')
    except Exception as e:
        print(f"Error loading {pth_file}: {e}")
        return
    
    if isinstance(checkpoint, dict) and 'model_state_dict' in checkpoint:
        state_dict = checkpoint['model_state_dict']
    else:
        state_dict = checkpoint
        
    print("Converting weights to JSON format...")
    json_weights = {}
    for key, tensor in state_dict.items():
        # Convert tensor to numpy array, then to list
        json_weights[key] = tensor.numpy().tolist()
        
    print(f"Saving weights to {json_file}...")
    with open(json_file, 'w') as f:
        json.dump(json_weights, f)
        
    print("Done!")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        pth_file = sys.argv[1]
    else:
        pth_file = "micro_mult_cont_checkpoint.pth"
        
    if len(sys.argv) > 2:
        json_file = sys.argv[2]
    else:
        json_file = "public/model_weights.json"
        
    convert_weights(pth_file, json_file)
